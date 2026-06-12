class Solution:
    # Function to print concentric square number pattern
    def pattern9(self, n):
        # Outer loop for rows
        for i in range(2 * n - 1):
            # Inner loop for columns
            for j in range(2 * n - 1):
                # Calculate distance from top
                top = i
                # Calculate distance from left
                left = j
                # Calculate distance from bottom
                bottom = (2 * n - 2) - i
                # Calculate distance from right
                right = (2 * n - 2) - j

                # Take the minimum of all four distances
                minDist = min(top, bottom, left, right)

                # Print number (starts with n at border, decreases inside)
                print(n - minDist, end=" ")
            # Move to the next row
            print()


if __name__ == "__main__":
    # Create object of Solution class
    sol = Solution()

    # Define size of pattern
    N=int(input())

    # Call pattern function
    sol.pattern9(N)
