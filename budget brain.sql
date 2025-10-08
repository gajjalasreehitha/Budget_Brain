-- Create the database
CREATE DATABASE IF NOT EXISTS budgetbrain;
USE budgetbrain;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Create expenses table
CREATE TABLE IF NOT EXISTS expenses (
    expense_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    category VARCHAR(50) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    expense_date DATE NOT NULL DEFAULT CURRENT_DATE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create goals table for future financial goals or wishlist
CREATE TABLE IF NOT EXISTS goals (
    goal_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    goal_name VARCHAR(100) NOT NULL,
    target_amount DECIMAL(10, 2) NOT NULL,
    saved_amount DECIMAL(10, 2) DEFAULT 0,
    due_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Insert sample users
INSERT INTO users (email, password) VALUES
('user1@example.com', 'password123'),
('user2@example.com', 'pass456');

-- Insert sample expenses
INSERT INTO expenses (user_id, category, amount) VALUES
(1, 'Food', 150.00),
(1, 'Rent', 800.00),
(1, 'Travel', 100.00),
(2, 'Food', 200.00),
(2, 'Rent', 900.00);

-- Insert sample goals
INSERT INTO goals (user_id, goal_name, target_amount, saved_amount, due_date) VALUES
(1, 'New Laptop', 1200.00, 300.00, '2025-12-31'),
(2, 'Vacation', 2000.00, 150.00, '2025-11-30');
