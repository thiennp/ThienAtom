import math

def factorial(n: int) -> int:
    """
    Calculate the factorial of a number.
    
    The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.
    Complexity: O(n)
    
    :param n: The number to calculate the factorial for.
    :return: The factorial of the number. Raises ValueError if n is negative or not an integer.
    """
    if not isinstance(n, int):
        raise TypeError("Factorial is only defined for integers")
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers")
    
    return math.factorial(n)
