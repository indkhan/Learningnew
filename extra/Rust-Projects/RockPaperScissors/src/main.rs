use rand::Rng;
use std::io;

fn main() {
    println!("Welcome to Rock Paper Scissors!");

    loop {
        println!("Enter your choice (rock/paper/scissors) or 'quit' to exit:");
        let mut user_input = String::new();
        io::stdin()
            .read_line(&mut user_input)
            .expect("Failed to read line");
        user_input = user_input.trim().to_lowercase();

        if user_input == "quit" {
            println!("Goodbye!");
            break;
        }
        if !["rock", "paper", "scissors"].contains(&user_input.as_str()) {
            println!("Invalid input. Please enter 'rock', 'paper', or 'scissors'");
            continue;
        }
        let computer_choice_digit = rand::thread_rng().gen_range(0..3);
        let computer_choice = match computer_choice_digit {
            0 => "rock",
            1 => "paper",
            2 => "scissors",
            _ => unreachable!(),
        };
        println!("Computer chose {}", computer_choice);

        match (user_input.as_str(), computer_choice) {
            ("rock", "scissors") | ("paper", "rock") | ("scissors", "paper") => {
                println!("You win!")
            }
            ("rock", "rock") | ("paper", "paper") | ("scissors", "scissors") => {
                println!("It's a tie!")
            }
            _ => println!("Computer wins!"),
        }
    }
}
