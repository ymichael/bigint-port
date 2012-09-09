describe("BigInt Port", function() {
  describe("Conversion Functions", function(){
    it("int2bigInt", function(){
      var x = 12345;
      var convert = function(){
        return int2bigInt(x,10,10);
      };
      expect(convert).not.toThrow();
    });
    it("str2bigInt", function(){
      var x = "12345";
      var convert = function(){
        return str2bigInt(x,10,10);
      };
      expect(convert).not.toThrow();
    });
    it("bigInt2str", function(){
      var x = "12345";
      x = str2bigInt(x,10,10);
      var convert = function(){
        return bigInt2str(x,10);
      };
      expect(convert).not.toThrow();
    });
  });

  describe("Comparison functions", function(){
    describe("equalsInt", function(){
      it("should compare bigInt to int, equalsInt", function(){
        var x = int2bigInt(2,10,10);
        var y = 2;
        var compare = function(){
          return equalsInt(x,y);
        };
        expect(compare).not.toThrow();
      });
      it("should compare bigInt to int, equalsInt, correctly", function(){
        var x = int2bigInt(2,10,10);
        var y = 2;
        var compare = function(){
          return equalsInt(x,y);
        };
        expect(compare()).toBe(1);
      });
      it("should compare bigInt to int, equalsInt, correctly", function(){
        var x = int2bigInt(2,10,10);
        var y = 3;
        var compare = function(){
          return equalsInt(x,y);
        };
        expect(compare()).toBe(0);
      });
      it("should compare bigInt to int, equalsInt, correctly", function(){
        var x = int2bigInt(3,10,10);
        var y = 2;
        var compare = function(){
          return equalsInt(x,y);
        };
        expect(compare()).toBe(0);
      });
    });

    describe("equals", function(){
      it("should compare bigInt to bigInt, equals", function(){
        var x = int2bigInt(2,10,10);
        var y = int2bigInt(2,10,10);
        var compare = function(){
          return equals(x,y);
        };
        expect(compare).not.toThrow();
      });
      it("should compare bigInt to int, equals, correctly", function(){
        var x = int2bigInt(2,10,10);
        var compare = function(){
          return equals(x,x);
        };
        expect(compare()).toBe(1);
      });
      it("should compare bigInt to int, equals, correctly", function(){
        var x = int2bigInt(200,10,10);
        var y = int2bigInt(123,10,10);
        var compare = function(){
          return equals(x,y);
        };
        expect(compare()).toBe(0);
      });
    });

    describe("isZero", function(){
      it("should test if bigInt is zero", function(){
        var x = int2bigInt(1234,10,10);
        var zero = function(){
          return isZero(x);
        };
        expect(zero).not.toThrow();
      });
      it("should test if bigInt is zero correctly", function(){
        var x = int2bigInt(1234,10,10);
        var zero = function(){
          return isZero(x);
        };
        expect(zero()).toBe(0);
      });
      it("should test if bigInt is zero correctly", function(){
        var x = int2bigInt(0,10,10);
        var zero = function(){
          return isZero(x);
        };
        expect(zero()).toBe(1);
      });
    });
  });

  describe("Util functions", function(){

  });

  describe("Basic Operations", function(){
    describe("add", function(){
      it("should add two bigInts", function(){
        var x = int2bigInt(1234,10,10);
        var testadd = function(){
          return add(x,x);
        };
        expect(testadd).not.toThrow();
      });
      it("should add two bigInts correctly", function(){
        var x = int2bigInt(1234,10,10);
        var y = int2bigInt(1234567,10,10);
        expect(equals(int2bigInt(1235801), add(x,y))).toBe(1);
      });
    });
    describe("sub", function(){
      it("should subtract two bigInts", function(){
        var x = int2bigInt(1234,10,10);
        var testsub = function(){
          return sub(x,x);
        };
        expect(testsub).not.toThrow();
      });
      it("should subtract two bigInts correctly", function(){
        var x = int2bigInt(1234,10,10);
        var y = int2bigInt(1234567,10,10);
        expect(equals(int2bigInt(1233333), sub(y,x))).toBe(1);
      });
      it("should handle negative results", function(){
        var x = int2bigInt(1234,10,10);
        var y = int2bigInt(1234567,10,10);
        expect(equals(int2bigInt(-1233333), sub(x,y))).toBe(1);
      });
    });
    describe("mult", function(){
      it("should mult two bigInts", function(){
        var x = int2bigInt(1234,10,10);
        var testmult = function(){
          return mult(x,x);
        };
        expect(testmult).not.toThrow();
      });
      it("should mult two bigInts correctly", function(){
        var x = int2bigInt(1234,10,10);
        var y = int2bigInt(1234567,10,10);
        expect(equals(int2bigInt(1523455678), mult(x,y))).toBe(1);
      });
    });
    describe("powMod", function(){
      it("should powMod three bigInts", function(){
        var x = int2bigInt(1234,10,10);
        var testpowmod = function(){
          return powMod(x,x,x);
        };
      });
      it("should powMod correctly", function(){
        var x = int2bigInt(1234,10,10);
        var y = int2bigInt(12345,10,10);
        var z = int2bigInt(123456,10,10);
        expect(equals(int2bigInt(40960), powMod(x,y,z))).toBe(1);
      });
    });
  });

  describe("Other Operations", function(){
    describe("mod", function(){
      it("should modulo two bigInts", function(){
        var x = int2bigInt(1234,10,10);
        var testmod = function(){
          return mod(x,x);
        };
        expect(testmod).not.toThrow();
      });
      it("should mod two bigInts correctly", function(){
        var x = int2bigInt(12341231,10,10);
        var y = int2bigInt(123456,10,10);
        expect(mod(x, y)).toEqual(int2bigInt(119087));
      });
    });

    describe("modInt", function(){
      it("should modulo a bigInt and a JS-Num", function(){
        var x = int2bigInt(1234,10,10);
        var testmod = function(){
          return modInt(x,123);
        };
        expect(testmod).not.toThrow();
      });
      it("should modInt correctly", function(){
        var x = int2bigInt(12341231,10,10);
        var y = 123456;
        expect(modInt(x, y)).toEqual(int2bigInt(119087));
      });
    });

    describe("negative", function(){
      it("should check if negative ", function(){
        var x = int2bigInt(1234,10,10);
        var testneg = function(){
          return negative(x);
        };
        expect(testneg).not.toThrow();
      });
      it("should check negative correctly", function(){
        var x = int2bigInt(1234,10,10);
        expect(negative(x)).toEqual(0);

        var y = int2bigInt(-1234,10,10);
        expect(negative(y)).toEqual(1);
      });
    });

    describe("findPrimes", function(){
      it("should return an array or all primes less than n", function(){
        var x = 1234;
        var testfindprimes = function(){
          return findPrimes(x);
        };
        expect(testfindprimes).not.toThrow();
      });
      it("should find primes correctly", function(){
          var primes = findPrimes(10);
          expect(primes).toEqual([2,3,5,7]);
      });
    });

    describe("addInt", function(){
      it("should add a bigInt to a JS-Num ", function(){
        var x = int2bigInt(1234,10,10);
        var test = function(){
          return addInt(x, 1234);
        };
        expect(test).not.toThrow();
      });
      it("should addInt correctly", function(){
          var x = int2bigInt(1234,10,10);
          expect(addInt(x, 1234)).toEqual(int2bigInt(2468));
      });
    });

    describe("GCD", function(){
      it("should calculate GDC of two bigInts ", function(){
        var x = int2bigInt(1234,10,10);
        var test = function(){
          return GCD(x, x);
        };
        expect(test).not.toThrow();
      });
      it("should calculate GCD correctly", function(){
        var x = int2bigInt(123);
        var y = int2bigInt(12334);

        expect(GCD(x, y)).toEqual(int2bigInt(1));
      });
    });

    describe("greater", function(){
      it("should compare two bigInts ", function(){
        var x = int2bigInt(1234,10,10);
        var test = function(){
          return greater(x, x);
        };
        expect(test).not.toThrow();
      });
      it("should compare 2 bigInts correctly", function(){
        var x = int2bigInt(123);
        var y = int2bigInt(12334);
        expect(greater(x, y)).toEqual(0);
        expect(greater(y, x)).toEqual(1);
      });
    });


  });
});