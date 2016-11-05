import {UpperCasePipe} from './uppercase.pipe';

describe('UpperCasePipe', () => {
  let pipe: UpperCasePipe;
  let value = 'up I go';

  beforeEach(() => {
      pipe = new UpperCasePipe();
  });

  it('should return string with first word upper-cased', () => {
      let result = pipe.transform(value);
      expect(result).toEqual('UP I GO');
  });

});
