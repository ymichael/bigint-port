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

      });
      it("should handle negative results", function(){

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

      });
    });
    describe("powMod", function(){
      it("should powMod three bigInts", function(){
        var x = int2bigInt(1234,10,10);
        var testpowmod = function(){
          return powMod(x,x,x);
        };
        expect(testpowmod).not.toThrow();
      });
    });
  });


});