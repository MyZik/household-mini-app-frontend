import { Component, EventEmitter, input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from '../../shared/components/custom-button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface CategoryEditData {
    categoryName: string;
    categoryEmoji: string;
    categoryId: number;
}

@Component({
    selector: 'app-category-edit-form',
    standalone: true,
    imports: [CommonModule, CustomButtonComponent, ReactiveFormsModule],
    templateUrl: './category-edit-form.component.html',
    styleUrl: './category-edit-form.component.less',
})
export class CategoryEditFormComponent implements OnInit {
    public readonly categoryData = input.required<CategoryEditData>();
    @Output() confirmEdit = new EventEmitter<{ id: number; name: string; emoji: string }>();
    @Output() cancelEdit = new EventEmitter<void>();

    editForm: FormGroup;

    protected emojis: string[] = [
        '🍎',
        '🍏',
        '🍐',
        '🍊',
        '🍋',
        '🍌',
        '🍉',
        '🍇',
        '🍓',
        '🍈',
        '🍒',
        '🍑',
        '🥭',
        '🍍',
        '🥥',
        '🥝',
        '🍅',
        '🥑',
        '🍆',
        '🥔',
        '🥕',
        '🌽',
        '🌶️',
        '🥒',
        '🥬',
        '🥦',
        '🧄',
        '🧅',
        '🍄',
        '🥜',
        '🌰',
        '🍞',
        '🥐',
        '🥖',
        '🥨',
        '🥯',
        '🥞',
        '🧇',
        '🧀',
        '🍖',
        '🍗',
        '🥩',
        '🥓',
        '🍔',
        '🍟',
        '🍕',
        '🌭',
        '🥪',
        '🌮',
        '🌯',
        '🥙',
        '🧆',
        '🥚',
        '🍳',
        '🥘',
        '🍲',
        '🥣',
        '🥗',
        '🍿',
        '🧈',
        '🧂',
        '🥫',
        '🍱',
        '🍘',
        '🍙',
        '🍚',
        '🍛',
        '🍜',
        '🍝',
        '🍠',
        '🍢',
        '🍣',
        '🍤',
        '🍥',
        '🥮',
        '🍡',
        '🥟',
        '🥠',
        '🥡',
        '🍦',
        '🍧',
        '🍨',
        '🍩',
        '🍪',
        '🎂',
        '🍰',
        '🧁',
        '🥧',
        '🍫',
        '🍬',
        '🍭',
        '🍮',
        '🍯',
        '🍼',
        '🥛',
        '☕',
        '🍵',
        '🍶',
        '🍾',
        '🍷',
        '🍸',
        '🍹',
        '🍺',
        '🍻',
        '🥂',
        '🥃',
        '🥤',
        '🧃',
        '🧉',
        '🧊',
        '🥢',
        '🍽️',
        '🍴',
        '🥄',
        '🔪',
        '🏺',
        '🧹',
        '🧯',
        '🛒',
        '🚪',
        '🛋️',
        '🪑',
        '🚿',
        '🛁',
        '🧴',
        '🧷',
        '🧺',
        '🧻',
        '🧼',
        '🧽',
        '📱',
        '💻',
        '🖥️',
        '🖨️',
        '⌨️',
        '🖱️',
        '💾',
        '💿',
        '📀',
        '🧮',
        '🎮',
        '🕹️',
        '🎲',
        '🎭',
        '🎨',
        '🧩',
        '🎺',
        '🎸',
        '🎻',
        '🎬',
        '📚',
        '📖',
        '📰',
        '🏆',
        '⚽',
        '🏀',
        '🏈',
        '⚾',
        '🥎',
        '🎾',
        '🏐',
        '🏉',
        '🎱',
        '🏓',
        '🏸',
        '🥅',
        '⛳',
        '🎣',
        '🤿',
        '🎽',
        '🛹',
        '🛷',
        '⛸️',
        '🥌',
        '🎿',
        '📦',
    ];

    constructor(private fb: FormBuilder) {
        this.editForm = this.fb.group({
            name: ['', [Validators.required]],
            emoji: ['', [Validators.required]],
        });
    }

    ngOnInit() {
        const data = this.categoryData();
        const currentEmoji = data.categoryEmoji;

        // Stelle sicher, dass das aktuelle Emoji in der Liste enthalten ist
        if (!this.emojis.includes(currentEmoji)) {
            this.emojis.push(currentEmoji);
        }

        this.editForm.setValue({
            name: data.categoryName,
            emoji: currentEmoji,
        });
    }

    protected onConfirmEdit(): void {
        if (this.editForm.valid) {
            const formValue = this.editForm.value;
            const categoryId = this.categoryData().categoryId;

            this.confirmEdit.emit({
                id: categoryId,
                name: formValue.name,
                emoji: formValue.emoji,
            });
        }
    }

    protected handleSubmit(): void {
        if (this.editForm.valid) {
            this.onConfirmEdit();
        }
    }

    protected onCancelEdit(): void {
        this.cancelEdit.emit();
    }
}
