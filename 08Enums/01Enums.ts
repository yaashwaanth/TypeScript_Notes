// Enums -> sometimes we want to restrict the choice with the value offered here.

enum SeatChoice {
    AISLE ,
    MIDDLE,
    WINDOW
}

const hcSeat = SeatChoice.AISLE


enum SeatChoice2 {
    AISLE = "aisle",
    MIDDLE = 3,
    WINDOW
}

enum SeatChoice3 {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = "widow"
}