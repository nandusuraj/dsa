// Problem: Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length. Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.
// Time complexity: O(n), where n is the number of elements in the array. This is because we are using a single loop to iterate through the array and remove duplicates.
// Space complexity: O(1), as we are not using any additional data structures to store the unique elements, we are modifying the input array in-place.  
#include <bits/stdc++.h>
using namespace std;
 int removeDuplicates(vector<int>& nums) {
        int index=1;
        int n=nums.size();
        for(int i=1;i<n;++i){

            if(nums[i]!=nums[i-1]){
                nums[index]=nums[i];
                index++;
            }


        }
        
    return index;}


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
    int newLength = removeDuplicates(arr);
    cout << "New length after removing duplicates: " << newLength << endl;      
    cout<< "Array after removing duplicates: ";
    for (int i = 0; i < newLength; i++) {
        cout << arr[i] << " ";
    }

    return 0;
}