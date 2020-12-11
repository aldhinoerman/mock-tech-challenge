function reverseMyName(str) {
    // put your code here
    return (str === '') ? '' : reverseMyName(str.substr(1)) + str.charAt(0);
    return str
}

const Test = (fun, result) => console.log(reverseMyName(fun) === result)

Test("A", "A")
Test("Michael Jackson","noskcaJ leahciM")
Test("Alvian Zachry Faturrahman", "namharrutaF yrhcaZ naivlA")
Test("", "")