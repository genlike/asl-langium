"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidationChecks = void 0;
/**
 * Register custom validation checks.
 */
function registerValidationChecks(services) {
    // const registry = services.validation.ValidationRegistry;
    // const validator = services.validation.AslValidator;
    // const checks: ValidationChecks<AslAstType> = {
    //     Person: validator.checkPersonStartsWithCapital
    // };
    // registry.register(checks, validator);
}
exports.registerValidationChecks = registerValidationChecks;
// /**
//  * Implementation of custom validations.
//  */
// export class AslValidator {
//     checkPersonStartsWithCapital(person: Person, accept: ValidationAcceptor): void {
//         // if (person.name) {
//         //     const firstChar = person.name.substring(0, 1);
//         //     if (firstChar.toUpperCase() !== firstChar) {
//         //         accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
//         //     }
//         // }
//     }
// }
//# sourceMappingURL=asl-validator.js.map