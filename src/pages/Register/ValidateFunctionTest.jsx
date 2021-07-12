/* 
  Function taken from Register/index.tsx, adapted for testing, 
  removed variables and states so that I can get the true or false 
  results as expected.
*/

export function checkInputValueToVerify(inputValue, validateType) {
  switch (validateType) {
    case "name":
      if (inputValue !== "") {
        return true;
      } else {
        return false;
      }
    case "email":
      // eslint-disable-next-line no-useless-escape
      const emailRegex = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/, 'gi');
      if (emailRegex.test(inputValue)) {
        return true
      } else {
        return false
      }
    case "phone":
      const rawPhoneNumber = inputValue.replace(/\D/gi, "");
      if (rawPhoneNumber.length < 11) {
        return false
      } else {
        return true
      }
    case "cpf":
      const rawCpf = inputValue.replace(/\D/gi, "");
        if (rawCpf.length < 11) {
          return false
        } else {
          return true
        }
    case "password":
      const rawNumber = inputValue.replace(/\D/gi, "");
      const passwordRegex = new RegExp(/(?!.*(.).*\1)\d{6}/, 'gi'); // check if has only unique values up to six numbers.

      if (passwordRegex.test(rawNumber)) {
        let tempIsVerified = true;
        rawNumber.split('').forEach((character, index, arr) => {
          if (index !== 0) {
            if (+character - 1 === +arr[index - 1]) {
              tempIsVerified = false;
            }
          }
        })
        return tempIsVerified;
      } else {
        return false
      }
    default:
      break;
  }
}