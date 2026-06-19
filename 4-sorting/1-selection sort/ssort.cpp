#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin>>n;
    vector<int> numbers(n);
    
    for(int i=0;i<n;++i){
        cin>>numbers[i];
    }
    for(int i=0;i<n;++i){
        int mini=i;
        for(int j=i+1;j<n;++j){
            if(numbers[j]<numbers[mini]){
                int temp=numbers[mini];
                numbers[mini]=numbers[j];
                numbers[j]=temp;
            }
        }
    }for(int x : numbers){cout<<x<<" ";}

    return 0;
}