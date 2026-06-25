#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    
int n;
cin>>n;
vector <int> arr(n);
for(int i=0;i<n;++i){
    cin>>arr[i];
}
int k;
cin>>k;
int low=0;
int high=k-1;
int curr=0;
for(int i=low;i<k;++i){
    curr+=arr[i];

}
int maxi=curr;
for(int i=k;i<n;++i){
    curr+=arr[i]-arr[i-k];
    low++;
    maxi=max(curr,maxi);
}
cout<<maxi;

    return 0;
}