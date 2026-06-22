#include <bits/stdc++.h>
using namespace std;

void merge(vector<int>& arr,int low, int high){
    int i=low;
    int mid=low+(high-low)/2;
    int j=mid+1;
    vector<int> temp;
    while(i<=mid &&j<=high){
        if(arr[i]<=arr[j]){
        temp.push_back(arr[i]);
        i++;}
        else{temp.push_back(arr[j]);
        j++;}

    }
    while(i<=mid){
        temp.push_back(arr[i]);
        i++;
    }
    while(j<=high){
        temp.push_back(arr[j]);
        j++;    }

    for(int i=low;i<=high;i++){
        arr[i]=temp[i-low];
    }
}


void msort(vector<int>&arr,int low,int high){
    int left=low;
    int right=high;
    if(left>=right){
        return ;
    }
    int mid=low+(high-low)/2;
    msort(arr,left,mid);
    msort(arr,mid+1,high);
    merge(arr,low,high);

}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin>>n;
    vector<int> arr(n);
    for(int i=0;i<n;i++){   
        cin>>arr[i];
    }
    msort(arr,0,n-1);
    for(int i=0;i<n;i++){
        cout<<arr[i]<<"->";
    }
    

    return 0;
}