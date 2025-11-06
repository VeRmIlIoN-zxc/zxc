class Calculator {
    constructor(pA, pB, pOper) {
        this.a = pA * 1,
        this.b = pB * 1,
        this.oper = pOper
    }

    sum() {
        return this.a + this.b
    }

    minus() {
        return this.a - this.b
    }

    umn() {
        return this.a * this.b
    }

    del() {
        return this.a / this.b
    }

    result() {
        switch (this.oper) {
            case "+":
                return this.sum();
            case "-":
                return this.minus();
            case "*":
                return this.umn();
            case "/":
                if (this.b == 0) {
                    return "Error"
                } else {
                    return this.del();
                }
        }
    }
}

let button = document.querySelector("button").addEventListener("click", () => {
    const calc = new Calculator(
        document.querySelectorAll("input")[0].value, 
        document.querySelectorAll("input")[1].value, 
        document.querySelector("select").value
    )

    document.querySelector('span').innerHTML = calc.result()
})
    