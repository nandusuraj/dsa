// Problem: Given an array of integers, find all unique triplets in the array which gives the sum of a specific target value.
// Time complexity: O(n^2), where n is the number of elements in the array. This is because we are using a nested loop to iterate through the array and find triplets.
// Space complexity: O(1), as we are not using any additional data structures to store the triplets, we are just printing them directly.

#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin>>n;
    vector<int> arr(n);
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    bool found=false;
    int target;
    cin>>target;
    sort(arr.begin(),arr.end());

    for(int i=0;i<n-2;i++){
        if(i>0 && arr[i]==arr[i-1]) continue; // Skip duplicates for the first element
        int left=i+1;
        int right=n-1;
        while(left<right){
            int sum=arr[i]+arr[left]+arr[right];
            if(sum==target){
                found=true;
                cout<<"Triplet found: "<<arr[i]<<" "<<arr[left]<<" "<<arr[right]<<endl;
                left++;
                right--;
                while(left<right && arr[left]==arr[left+1]) left++;
                while(left<right && arr[right]==arr[right-1]) right--;
            }
            else if(sum<target){
                left++;
            }
            else{
                right--;
            }

        }

    }

    return 0;
}