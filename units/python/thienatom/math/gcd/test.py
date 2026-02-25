from thienatom.math.gcd import gcd

def test_gcd():
    assert gcd(8, 12) == 4
    assert gcd(54, 24) == 6
    assert gcd(48, 18) == 6
    assert gcd(0, 5) == 5
    assert gcd(5, 0) == 5
    assert gcd(0, 0) == 0
    assert gcd(-8, -12) == 4
    assert gcd(-54, 24) == 6
    
    try:
        gcd(1.5, 2)
        assert False, "Should have raised TypeError"
    except TypeError:
        pass

if __name__ == "__main__":
    test_gcd()
    print("gcd tests passed")
