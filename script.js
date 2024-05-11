let questions = [
  {
    question: "What is Microbiology?",
    options: [
      "Study of molecules that are visible to human eyes",
      "Study of animals and their family",
      "Study of organisms that are not visible to naked eyes",
      "Study of microscope",
    ],
    answer: "Study of organisms that are not visible to naked eyes",
  },
  {
    question: "Who is known as the father of Microbiology?",
    options: [
      "Edwin John Butler",
      "Ferdinand Cohn",
      "Robert Koch",
      "Antoni van Leeuwenhoek",
    ],
    answer: "Antoni van Leeuwenhoek",
  },
  {
    question:
      "Which microorganism(s) among the following perform photosynthesis by utilizing light?",
    options: [
      "Cyanobacteria, Fungi and Viruses",
      "Viruses",
      "Cyanobacteria",
      "Fungi",
    ],
    answer: "Cyanobacteria",
  },
  {
    question:
      "Which part of the compound microscope helps in gathering and focusing light rays on the specimen to be viewed?",
    options: [
      "Condenser lens",
      "Magnifying lens",
      "Objective lens",
      "Eyepiece lens",
    ],
    answer: "Condenser lens",
  },
  {
    question: "Which of the following are produced by microorganisms?",
    options: [
      "Alcoholic beverages",
      "Fermented dairy products",
      "Breads",
      "All of the mentioned",
    ],
    answer: "All of the mentioned",
  },
  {
    question: "What is the approximate size of the bacterial cell?",
    options: [
      "1mm in diameter",
      "0.5 to 1.0 micrometer in diameter",
      "2mm in diameter",
      "2 micrometer in diameter",
    ],
    answer: "0.5 to 1.0 micrometer in diameter",
  },
  {
    question:
      "The greatest resolution in light microscopy can be obtained with ___________",
    options: [
      "Shortest wavelength of visible light used",
      "Longest wavelength of visible light used",
      "An objective with minimum numerical aperture",
      "Shortest wavelength of visible light used and an objective with the maximum numerical aperture",
    ],
    answer:
      "Shortest wavelength of visible light used and an objective with the maximum numerical aperture",
  },
  {
    question: "Which of the following is used in electron microscope?",
    options: [
      "electron beams and magnetic fields",
      "light waves",
      "magnetic fields",
      "electron beams",
    ],
    answer: "electron beams and magnetic fields",
  },
  {
    question: "Which among the following are “Spirochetes”?",
    options: [
      "Streptomyces sp.",
      "Treponema pallidum",
      "Spirillum volutans",
      "Corynebacterium diphtheriae",
    ],
    answer: "Treponema pallidum",
  },
  {
    question:
      "Bacteria having clusters of flagella at both poles of cells are known as?",
    options: ["Amphitrichous", "Monotrichous", "Peritrichous", "Lophotrichous"],
    answer: "Amphitrichous",
  },
  {
    question:
      "The respiratory chain of bacteria is associated with the _____________",
    options: [
      "cytoplasmic membrane",
      "cell wall",
      "cytoplasm",
      "mitochondrial membrane",
    ],
    answer: "cytoplasmic membrane",
  },
  {
    question: "Glycolysis can occur in ___________",
    options: [
      "anaerobic cells",
      "aerobic cells",
      "neither aerobic and anaerobic cells",
      "both aerobic and anaerobic cells",
    ],
    answer: "both aerobic and anaerobic cells",
  },
  {
    question:
      "Which of the following enzyme removes the RNA primer with its 5’-nuclease activity?",
    options: [
      "DNA polymerase III",
      "RNA polymerase",
      "DNA polymerase I",
      "DNA polymerase II",
    ],
    answer: "DNA polymerase I",
  },
  {
    question: "Phosphorus is essential component of __________",
    options: [
      "phospholipids",
      "teichoic acid",
      "nucleotides",
      "All of the mentioned",
    ],
    answer: "All of the mentioned",
  },
  {
    question: "The bacterium Staphylococcus aureus is which type of bacteria?",
    options: [
      "Mesophile",
      "Mesophile and psychrophile",
      "Psychrophile",
      "Thermophile",
    ],
    answer: "Mesophile",
  },
  {
    question:
      "Growth of bacteria or microorganisms refer to __________________",
    options: [
      "changes in the total population",
      "an increase in number of cells",
      "an increase in the size of an individual organism",
      "an increase in the mass of an individual organism",
    ],
    answer: "an increase in number of cells",
  },
  {
    question:
      "Which of the following method can be used to determine the number of bacteria quantitatively?",
    options: [
      "Direct microscopic count",
      "Turbidity measurements",
      "Dry weight",
      "All of the mentioned",
    ],
    answer: "All of the mentioned",
  },
  {
    question: "Which of the following is NOT a product of fermentation?",
    options: ["Ethanol", "Lactic acid", "Acetic acid", "Pyruvic acid"],
    answer: "Pyruvic acid",
  },
  {
    question: "Which of the following is NOT a characteristic of viruses?",
    options: [
      "They are acellular",
      "They are visible under light microscope",
      "They contain genetic material",
      "They are obligate intracellular parasites",
    ],
    answer: "They are visible under light microscope",
  },
  {
    question: "Which of the following is NOT a method of sterilization?",
    options: ["Autoclaving", "Pasteurization", "Incineration", "Refrigeration"],
    answer: "Refrigeration",
  },
];

function Quiz(questions) {
  let questionsElement = document.getElementById("questions");
  let counter = 0;
  let answers = "";
  let marks = 0;
  let currentCounter;
  let options = document.getElementsByClassName("options")[0];
  let next = document.getElementById("next");
  let questionCounter = 0;

  next.addEventListener("click", () => {
    next.disabled = true;

    currentCounter = counter;
    //reset
    options.innerHTML = "";

    //end screen

    if (counter > questions.length - 1) {
      questionsElement.innerHTML = "You completed the quiz.Your marks are-";
      options.innerHTML = `${marks} out of ${questions.length}`;
    }

    //question
    questionCounter++;
    questionsElement.innerHTML =
      questionCounter + ") " + questions[counter].question;
    questionsElement.classList.add("bigFont");
    // options

    //opt 1
    let opt1 = document.createElement("button");
    opt1.innerHTML = questions[counter].options[0];
    options.append(opt1);
    opt1.classList.add("bigBtn");

    //opt 2
    let opt2 = document.createElement("button");
    opt2.innerHTML = questions[counter].options[1];
    options.append(opt2);
    opt2.classList.add("bigBtn");

    //opt 3
    let opt3 = document.createElement("button");
    opt3.innerHTML = questions[counter].options[2];
    options.append(opt3);
    opt3.classList.add("bigBtn");

    //opt4
    let opt4 = document.createElement("button");
    opt4.innerHTML = questions[counter].options[3];
    options.append(opt4);
    opt4.classList.add("bigBtn");

    //event listeners

    opt1.addEventListener("click", () => {
      answers = opt1.innerHTML;
      if (answers == questions[currentCounter].answer) {
        marks++;
        console.log(marks);
      }
      opt1.disabled = true;

      next.disabled = false;
    });
    opt2.addEventListener("click", () => {
      answers = opt2.innerHTML;
      if (answers == questions[currentCounter].answer) {
        marks++;
        console.log(marks);
      }
      opt2.disabled = true;

      next.disabled = false;
    });
    opt3.addEventListener("click", () => {
      answers = opt3.innerHTML;
      if (answers == questions[currentCounter].answer) {
        marks++;
        console.log(marks);
      }
      opt3.disabled = true;

      next.disabled = false;
    });
    opt4.addEventListener("click", () => {
      answers = opt4.innerHTML;
      if (answers == questions[currentCounter].answer) {
        marks++;
        console.log(marks);
      }
      opt4.disabled = true;

      next.disabled = false;
    });
    counter++;
  });
}

console.log(Quiz(questions));
