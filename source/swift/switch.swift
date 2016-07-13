import UIKit

let rating = "b"
if rating == "A" {
	print("Great")
}
else if rating == "B" {
	print("Just so-so")
} 
else {
	print("Error")
}


switch rating {
case "a", "A" :
	print("Great")
case "b", "B" :
	print("Just-so-so")
case "c", "C" :
	print("It's bad")
default:
	print("Error")
}
