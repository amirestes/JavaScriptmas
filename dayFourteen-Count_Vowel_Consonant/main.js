function countVowelConsonant(str) {
  // write code here
  const noVowels = str.replace(/[aeiou]/gi, '');
  const noCons = str.replace(/[^aeiou]/gi, '')
  console.log(noVowels)
  console.log(noCons)
}



/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});