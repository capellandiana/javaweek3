// Inside of a closure, create an object called pii (Personally Identifiable Information) vv
//that cannot be accessed directly. The object should have at least two properties: name and ssn. vv
// Only the name property should be accessible, and it should be called through a public function. The ssn property should not be accessible at all. Creating private objects and private properties helps you control who has access to what data and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data. You can use 'getName' or other get methods to access data that people might need. For example, people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their ssn.

// In plain English, an object literal is a comma-separated list of name-value pairs inside of curly braces.
// Those values can be properties and functions.


// Output: John
// console.log(patient2.getName());

// Output: 123-45-6789
//  console.log(patient2.getSSN()); 
class patient {
    constructor() {
        let pii = {
            name: "Diana",
            ssn: "123-45-5678"
        };

        this.getName = () => {
            return patient.name;
        };
        this.setName = (value) => {
            names = value;
        };
    }
}

// create a new object using the constructor function
var patient1 = new patient();
var patient2 = new patient();

// try to access the _taxReturns property directly - will get undefined
console.log(patient2.names);
console.log(patient2.ssn);
console.log(patient2.getName());
console.log(patient2.getSSN());

