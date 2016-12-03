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
									data_bar:[],
									data_line: [[],[],[]]
								}
							)
    })
    it('should handle PRESS_CHANGE', () => {
				let initState = {
					temperature: 15,
					pressure: 1000,
					data_arr: [],
					data_bar:[],
					data_line: [[],[],[]]
				}
        expect(
					reducer.default(initState, {type: 'PRESS_CHANGE', pressure: 1001})
							).toEqual(
								{
									temperature: 15,
									pressure: 1001,
									data_arr: [],
									data_bar:[],
									data_line: [[],[],[]]
								}
							)
    })
		it('should handle TEMP_CHANGE', () => {
        expect(
					reducer.default(undefined, {type: 'TEMP_CHANGE', temperature: 11})
							).toEqual(
								{
									temperature: 11,
									pressure: 1000,
									data_arr: [],
									data_bar:[],
									data_line: [[],[],[]]
								}
							)
    })

});

