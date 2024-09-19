import java.util.HashMap;

public class Convertor {
    HashMap<Integer, String> numberWordMap;
    HashMap<Integer, String> unitWordMap;
    Convertor(){
        this.numberWordMap = new HashMap<Integer, String>();
        this.unitWordMap = new HashMap<Integer, String>();
        this.numberWordMap.put(0, "");
        this.numberWordMap.put(1, "ONE");
        this.numberWordMap.put(2, "TWO");
        this.numberWordMap.put(3, "THREE");
        this.numberWordMap.put(4, "FOUR");
        this.numberWordMap.put(5, "FIVE");
        this.numberWordMap.put(6, "SIX");
        this.numberWordMap.put(7, "SEVEN");
        this.numberWordMap.put(8, "EIGHT");
        this.numberWordMap.put(9, "NIGHT");
        this.numberWordMap.put(10, "TEN");
        this.numberWordMap.put(11, "ELEVEN");
        this.numberWordMap.put(12, "TWELVE");
        this.numberWordMap.put(13, "THIRTEEN");
        this.numberWordMap.put(14, "FOURTEEN");
        this.numberWordMap.put(15, "FIFTEEN");
        this.numberWordMap.put(16, "SIXTEEN");
        this.numberWordMap.put(17, "SEVENTEEN");
        this.numberWordMap.put(18, "EIGHTEEN");
        this.numberWordMap.put(19, "NINETEEN");
        this.numberWordMap.put(20, "TWENTY");
        this.numberWordMap.put(30, "THIRTY");
        this.numberWordMap.put(40, "FORTY");
        this.numberWordMap.put(50, "FIFTY");
        this.numberWordMap.put(60, "SIXTY");
        this.numberWordMap.put(70, "SEVENTY");
        this.numberWordMap.put(80, "EIGHTY");
        this.numberWordMap.put(90, "NINETY");
        this.unitWordMap.put(0, "");
        this.unitWordMap.put(1, "THOUSAND");
        this.unitWordMap.put(2, "MILLION");
        this.unitWordMap.put(3, "BILLION");
    }

    public String hundredsToWord (int hundreds) {
        String words = "";
        if(hundreds == 0) return words;
        int quotient = hundreds / 100;
        int remainder = hundreds % 100;
        if(quotient > 0){
            words = this.numberWordMap.get(quotient) + " HUNDRED";
            if(remainder != 0){
                words = words + " AND ";
            }
        }

        if(remainder > 20){
            if(remainder % 10 == 0){
                words = words + this.numberWordMap.get(remainder);
            } else {
                words = words + this.numberWordMap.get(remainder / 10 * 10) + "-" + this.numberWordMap.get(remainder % 10);
            }
        } else {
            words = words + this.numberWordMap.get(remainder);
        }

        return words;
    }

    public String convert (String input) {
        String word = "";
        int inputInNumber = (int)(Double.parseDouble(input) * 100);
        int dollars = inputInNumber / 100;
        int cents = inputInNumber % 100;
        int numberOfUnits = 0;

        if(cents > 0){
            word = hundredsToWord(cents) + " CENTS";
            if(dollars > 0){
                word = " AND " + word;
            }
        }

        if(dollars > 0){
            word = " DOLLARS" + word;
        }

        while (dollars > 0) {
            int remainder = dollars % 1000;
            String remainderToWords = hundredsToWord(remainder);
            if(numberOfUnits == 0){
                word = remainderToWords + word;
            } else {
                if(remainderToWords != ""){
                    if(word.charAt(0) != ' '){
                        word = " " + word;
                    }
                    word = remainderToWords + " " + this.unitWordMap.get(numberOfUnits) + word;
                }
            }

            if(dollars >= 1000){
                numberOfUnits++;
            }
            dollars = dollars / 1000;
        }

        return word;
    }
}

