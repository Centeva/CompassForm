import { Input, Component } from '@angular/core';
import { CompassRichTextControl } from './compass-rich-text-control';
import { CompassComponent } from '../compass-control';
import { CompassForm } from '../compass-form';

@Component({
    templateUrl: './compass-rich-text-control.component.html',
    styleUrls: ['./compass-rich-text-control.component.scss'],
})
export class CompassRichTextControlComponent<ModelType> implements CompassComponent<ModelType, string> {
    @Input()
    compassForm: CompassForm<ModelType>;
    @Input()
    compassControl: CompassRichTextControl<ModelType>;

    get snapshot() {
        return this.compassControl.snapshot;
    }

    quillModules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ font: [] }],
            [{ align: [] }],
            ['link'],
            ['clean'],
        ],
    };
}
