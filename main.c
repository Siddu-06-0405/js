#include <stdio.h>

int main(void) {
//     for (int i = 97; i <= 122; i++) {
//         printf("%c", i);
//     }
    // int a[5];
    // for(int i=0;i<5;i++){
    //     printf("enter an integer");
    //     scanf("%d",&a[i]);
    // }
    // for(int i=0;i<5;i++){
    //     printf("%d",a[i]);
    // }
//     double value=4150.12; 
//     printf("Double value :%.100f\n",value); 
// // convert double value to integer 
//     int number = value; 
//     printf("Integer Value: %d", number);
//     char alphabet = 'a';
//     printf("%c",alphabet);
//     printf("%d",alphabet);
    int i,n,a[10],mid,low,high,key, found=0; 
    
    printf("\n Enter the number of elements:\n"); 
    scanf("%d", &n); 
    printf("Enter the array element in the ascending order\n"); 
    for(i=0;i<n;i++) 
    { 
    scanf("%d", &a[i]); 
    } 
    printf("\n Enter the key element to be searched\n"); 
    scanf("%d", &key); 
    low=0; 
    high=n-1; 
    while(low<=high) 
    { 
        mid=(low+high)/2; 
        if(key==a[mid]) 
        { 
        found=1; 
        break; 
        } 
        else if(key>a[mid]) {
            low=mid+1;
        } 
        else{ 
        high=mid-1;} 
    }
    if(found ==1) {
    printf("Item found in position : %d",mid+1); 
    }else {
    printf("\n Item not found\n");
    } 
    return 0;
}