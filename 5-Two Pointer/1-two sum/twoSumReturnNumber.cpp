// Problem: Given an array of integers, return all the unique pairs of numbers that sum up to a specific target value.
// Time complexity: O(n log n), where n is the number of elements in the array. This is because we are sorting the array first, which takes O(n log n) time, and then using a two-pointer approach to find the pairs, which takes O(n) time.
// Space complexity: O(1), as we are not using any additional data structures to store the pairs, we are just printing them directly.   
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) {   
        cin >> arr[i];
    }
    sort(arr.begin(), arr.end());
    int target;
    cin >> target;
    int left=0,right=n-1;
    while(left<right){
        int sum=arr[left]+arr[right];
        if(sum==target){
            cout<<"["<<arr[left]<<","<<arr[right]<<"]";
            left++;
            right--;
        }
        else if(sum<target){
            left++;
        }
        else{
            right--;
        }
        
    }cout<<endl;
 
    return 0;
}