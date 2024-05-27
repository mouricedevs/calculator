def add(num1, num2):
    return num1 + num2

def subtract(num1, num2):
    return num1 - num2

def multiply(num1, num2):
    return num1 * num2

def divide(num1, num2):
    if num2 != 0:
        return num1 / num2
    else:
        return "Cannot divide by zero!"

def main():
    while True:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))

        # Calculate and display the results for all operations
        print("Addition:", add(num1, num2))
        print("Subtraction:", subtract(num1, num2))
        print("Multiplication:", multiply(num1, num2))
        print("Division:", divide(num1, num2))

        # Ask the user if they want to perform another calculation
        choice = input("Do you wish to perform another calculation? (1: Yes, 2: No): ")
        if choice == '2':
            break
        elif choice != '1':
            print("Invalid choice. Please enter '1' for Yes or '2' for No.")

main()
