export { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop, sumTreeValues };
function sumTo(n) {
    if (n == 1)
        return 1;
    return n + sumTo(n - 1);
}
function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
