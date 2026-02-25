from thienatom.math.factorial import factorial

def test_factorial():
    assert factorial(0) == 1
    assert factorial(1) == 1
    assert factorial(2) == 2
    assert factorial(5) == 120
    assert factorial(6) == 720
    
    try:
        factorial(-1)
        assert False, "Should have raised ValueError"
    except ValueError:
        pass
        
    try:
        factorial(1.5)
        assert False, "Should have raised TypeError"
    except TypeError:
        pass

if __name__ == "__main__":
    test_factorial()
    print("factorial tests passed")
