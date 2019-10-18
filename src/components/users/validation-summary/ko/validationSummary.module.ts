import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { ValidationSummaryModelBinder } from "../../validation-summary/validationSummaryModelBinder";
import { ValidationSummaryViewModelBinder } from "./validationSummaryViewModelBinder";


export class ValidationSummaryModule implements IInjectorModule {
    public register(injector: IInjector): void {
        injector.bindToCollection("modelBinders", ValidationSummaryModelBinder);
        injector.bindToCollection("viewModelBinders", ValidationSummaryViewModelBinder);
    }
}