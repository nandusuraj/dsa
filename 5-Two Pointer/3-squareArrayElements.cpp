// Problem: Given a sorted array of integers, return an array of the squares of each number, also sorted in non-decreasing order.
// Time complexity: O(n), where n is the number of elements in the array. This is because we are using a single loop to iterate through the array and fill the result array with squared values.
// Space complexity: O(n), as we are using an additional array to store the squared values

#include <bits/stdc++.h>
using namespace std;
vector<int> sortedSquares(vector<int>& nums) {
        int n=nums.size();
        vector <int> res(n);
        int left=0;
       
        int right=n-1;
        for(int i =n-1;i>=0;--i){
            int leftsquare=nums[left]*nums[left];
            int rightsquare=nums[right]*nums[right];
            if(leftsquare>rightsquare){
                res[i]=leftsquare;
                left++;
            }
            else {
                res[i]=rightsquare;
                right--;
            }
        }
    return res;}


int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    vector<int> result = sortedSquares(arr);
    cout << "Squared and sorted array: ";
    for (int i = 0; i < n; i++) {
        cout << result[i] << " ";
    }                       

    return 0;
}