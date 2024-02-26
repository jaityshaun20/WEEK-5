// Define an abstract class named Sport
abstract class Sport {
    abstract play(): void;
    abstract score(): void;
}
// Define an interface with at least 1 function
interface Equipment {
    getEquipment(): void;
}
class Volleyball extends Sport implements Equipment {
    override play(): void {
      console.log("Playing volleyball...");
    }
  
    override score(): void {
      console.log("Scoring points in volleyball...");
    }
  
    getEquipment(): void {
      console.log("Volleyball requires a net and a ball.");
    }
  }
  class Basketball extends Sport implements Equipment {
    override play(): void {
      console.log("Playing basketball...");
    }
  
    override score(): void {
      console.log("Scoring points in basketball...");
    }
  
    getEquipment(): void {
      console.log("Basketball requires a hoop and a ball.");
    }
  }
  // Create instances of Volleyball and Basketball
const volleyball = new Volleyball();
const basketball = new Basketball();

// Use functions from the abstract class and interface
volleyball.play();
volleyball.getEquipment();

basketball.score();
basketball.getEquipment();
