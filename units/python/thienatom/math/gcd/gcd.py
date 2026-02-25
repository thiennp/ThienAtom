import math

def gcd(a: int, b: int) -> int:
    """
    Find the greatest common divisor of two numbers.
    
    The greatest common divisor (GCD) of two or more integers, which are not all zero,
    is the largest positive integer that divides each of the integers.
    Complexity: O(log(min(a, b)))
    
    :param a: The first number.
    :param b: The second number.
    :return: The greatest common divisor.
    """
    if not isinstance(a, int) or not isinstance(b, int):
        raise TypeError("GCD is only defined for integers")
        
    return math.gcd(a, b)
