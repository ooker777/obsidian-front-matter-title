import {mock} from "jest-mock-extended";
import StrategyInterface from "@src/Components/Extractor/Interfaces/StrategyInterface";
import Extractor from "@src/Components/Extractor/Extractor";
import {expect} from "@jest/globals";
import TypeNotSupportedException from "@src/Components/Extractor/Exceptions/TypeNotSupportedException";
import PathNotFoundException from "@src/Components/Extractor/Exceptions/PathNotFoundException";

describe('Extractor Test', () => {
    const fooStrategy = mock<StrategyInterface>();
    const barStrategy = mock<StrategyInterface>();
    const extractor = new Extractor([fooStrategy, barStrategy]);

    describe(`Throws ${PathNotFoundException.name}`, () => {
        const data = [{path: 'path', obj: {}}];
        for (const item of data) {
            test(`Path ${item.path} will be not found in ${JSON.stringify(item.obj)}`, () => {
                const cb = () => extractor.extract(item.path, item.obj);
                expect(cb).toThrowError(PathNotFoundException);
            })
        }
    });

});