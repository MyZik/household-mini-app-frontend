import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomButtonComponent } from '../../shared/components/custom-button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import {
    cancelCreateItemButtonClickedAction,
    createItemFormSubmittedAction,
} from '../../../application/items';

@Component({
    selector: 'app-category-item-form',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CustomButtonComponent,
        MatFormFieldModule,
        MatInputModule,
    ],
    templateUrl: './category-item-form.component.html',
    styleUrl: './category-item-form.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryItemFormComponent {
    public readonly categoryId = input.required<number>();

    protected itemForm: FormGroup = this.fb.group({
        name: ['', [Validators.required]],
        emoji: ['🍎', [Validators.required]],
        unitType: ['piece', [Validators.required]],
    });

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
    ];

    protected unitTypes = [
        {
            label: 'Stück',
            value: 'piece',
        },
        {
            label: 'Packung',
            value: 'package',
        },
        {
            label: 'Gramm',
            value: 'gram',
        },
        {
            label: 'Kilogramm',
            value: 'kilogram',
        },
        {
            label: 'Milliliter',
            value: 'milliliter',
        },
        {
            label: 'Liter',
            value: 'liter',
        },
    ];

    constructor(
        private fb: FormBuilder,
        private store: Store
    ) {}

    protected submitForm(): void {
        if (this.itemForm.valid) {
            const formValue = this.itemForm.value;

            this.store.dispatch(
                createItemFormSubmittedAction({
                    categoryId: this.categoryId(),
                    name: formValue.name,
                    emoji: formValue.emoji,
                    quantityType: formValue.unitType,
                })
            );
        }
    }

    protected cancelForm(): void {
        this.store.dispatch(
            cancelCreateItemButtonClickedAction({
                categoryId: this.categoryId(),
            })
        );
    }
}
