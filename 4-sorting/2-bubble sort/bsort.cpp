#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin>>n;
    vector<int> num(n);
    for(int i=0;i<n;++i){
        cin>>num[i];
    }

    for(int i=n-1;i>=0;--i){
        int didswap=0;
        for(int j=0;j<i;++j){
            if(num[j]>num[j+1]){
                swap(num[j],num[j+1]);
                didswap=1;
            
            }
        }if (didswap==0){
            break;
        }
    }
for(int x : num){cout<<x<<" ";}

    return 0;
}