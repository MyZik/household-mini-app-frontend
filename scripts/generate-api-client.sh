#!/bin/bash

# Warten auf die Verfügbarkeit der API
echo "Warte auf die Verfügbarkeit der OpenAPI-Spezifikation..."
timeout=60
counter=0
while ! curl -s http://host.docker.internal:8000/api/docs.yaml > /dev/null && [ $counter -lt $timeout ]; do
    sleep 1
    counter=$((counter+1))
    echo "Warte auf API... $counter/$timeout"
done

if [ $counter -eq $timeout ]; then
    echo "Timeout beim Warten auf die API. Stelle sicher, dass der API-Server unter http://host.docker.internal:8000 läuft."
    exit 1
fi

echo "OpenAPI-Spezifikation ist verfügbar. Beginne mit der Generierung des API-Clients..."

# Erstelle temporäre Datei für die OpenAPI-Spezifikation
curl -s http://host.docker.internal:8000/api/docs.yaml -o /tmp/openapi-spec.yaml

# Überprüfe, ob openapi-generator-cli verfügbar ist und wo es sich befindet
echo "Verfügbare Befehle im Container:"
ls -la /usr/local/bin
echo "Suche nach openapi-generator-cli:"
find / -name "openapi-generator-cli*" -type f 2>/dev/null || echo "Befehl nicht gefunden"

# Generiere API-Client mit direktem Java-Aufruf
echo "Generiere API-Client mit Java JAR-Datei"
java -jar /opt/openapi-generator/modules/openapi-generator-cli/target/openapi-generator-cli.jar generate \
    -i /tmp/openapi-spec.yaml \
    -g typescript-angular \
    -o /app/src/app/domain/api-client/generated \
    --skip-validate-spec \
    --additional-properties=npmName=api-client,npmVersion=1.0.0,ngVersion=18.2.0,providedIn=root,generateAliasAsModel=true

echo "API-Client erfolgreich generiert in src/app/domain/api-client/generated."

# Fixe Berechtigungen für die generierten Dateien, wenn im Docker-Kontext
chown -R 1000:1000 /app/src/app/domain/api-client/generated

exit 0
