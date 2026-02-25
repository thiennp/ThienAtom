import math

def is_prime(n: int) -> bool:
    """
    Check if a number is prime.
    
    A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
    Complexity: O(sqrt(n))
    
    :param n: The number to check.
    :return: True if the number is prime, False otherwise.
    """
    if not isinstance(n, int):
        return False
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
        
    limit = int(math.sqrt(n))
    for i in range(5, limit + 1, 6):
        if n % i == 0 or n % (i + 2) == 0:
            return False
            
    return True
