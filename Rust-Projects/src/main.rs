use std::io;

fn main() {
    let mut input = String::new();
    println!("what is ur name!");
    io::stdin().read_line(&mut input).expect("Input Failed");
    println!("Good Morning :{}", input);

    let v = vec![1, 2, 3];
    let iter = v.iter();
    println!(iter)
}
