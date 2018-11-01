import { CompassRichTextControlComponent } from './compass-rich-text-control.component';
import { CompassControlConfig, CompassControl } from '../compass-control';
interface CompassRichTextControlConfig<ModelType> extends CompassControlConfig<ModelType, string> {}

export class CompassRichTextControl<ModelType> extends CompassControl<ModelType, string> {
    constructor(public config: CompassRichTextControlConfig<ModelType>) {
        super(config);
    }

    getComponent() {
        return CompassRichTextControlComponent;
    }
}
