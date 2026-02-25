from thienatom.math.is_prime import is_prime

def test_is_prime():
    assert is_prime(2) is True
    assert is_prime(3) is True
    assert is_prime(5) is True
    assert is_prime(7) is True
    assert is_prime(11) is True
    assert is_prime(13) is True
    assert is_prime(97) is True
    
    assert is_prime(1) is False
    assert is_prime(0) is False
    assert is_prime(-1) is False
    assert is_prime(4) is False
    assert is_prime(6) is False
    assert is_prime(9) is False
    assert is_prime(15) is False
    assert is_prime(100) is False
    
    assert is_prime(1.5) is False
    assert is_prime("2") is False

if __name__ == "__main__":
    test_is_prime()
    print("is_prime tests passed")
