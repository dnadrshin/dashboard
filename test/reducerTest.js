import expect from 'expect';
import * as reducer from '../src/reducers'

console.log(reducer.default);

describe('reducer', () => {
    beforeEach(() => {

    });
    it('should return initial state', () => {
        expect(
            reducer.default(undefined, {})
        ).toEqual(
            {
                temperature: 15,
                pressure: 1000,
                data_arr: [],
                data_bar: [],
                data_line: [[], [], []]
            }
            )
    })
    it('should handle PRESS_CHANGE', () => {
        expect(
            reducer.default(undefined, { type: 'PRESS_CHANGE', pressure: 1001 })
        ).toEqual(
            {
                temperature: 15,
                pressure: 1001,
                data_arr: [],
                data_bar: [],
                data_line: [[], [], []]
            }
            )
    })
    it('should handle TEMP_CHANGE', () => {
        expect(
            reducer.default(undefined, { type: 'TEMP_CHANGE', temperature: 11 })
        ).toEqual(
            {
                temperature: 11,
                pressure: 1000,
                data_arr: [],
                data_bar: [],
                data_line: [[], [], []]
            }
            )
    })
    it('should handle AJAX_CHANGE', () => {
        let initState = {
            temperature: 15,
            pressure: 1000,
            data_arr: [],
            data_bar: [],
            data_line: [[], [], []]
        }
        let data_bar = [50, 10];
        let data_arr = [{ amount: 50, day: 1 }, { amount: 10, day: 2 }];
        expect(
            reducer.default(initState, { type: 'AJAX_CHANGE', data_arr, data_bar })
        ).toEqual(
            {
                temperature: 15,
                pressure: 1000,
                data_arr: [{ amount: 50, day: 1 }, { amount: 10, day: 2 }],
                data_bar: [50, 10],
                data_line: [[15.01504648658599, 9.157198806419382], [30.03009297317198, 18.314397612838764], [45.04513945975797, 27.471596419258148]]
            }
            )
    })

});

