export const Icons = {
  Tune: ({
    size = 12,
    ...props
  }: { size?: number } & React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width={size}
        height={size * (16 / 18)}
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M14.6538 15.6537C13.7169 15.6537 12.925 15.3303 12.278 14.6834C11.6312 14.0364 11.3077 13.2445 11.3077 12.3077C11.3077 11.3707 11.6312 10.5788 12.278 9.93194C12.925 9.28494 13.7169 8.96144 14.6538 8.96144C15.5908 8.96144 16.3827 9.28494 17.0295 9.93194C17.6765 10.5788 18 11.3707 18 12.3077C18 13.2445 17.6765 14.0364 17.0295 14.6834C16.3827 15.3303 15.5908 15.6537 14.6538 15.6537ZM14.6528 14.1537C15.1624 14.1537 15.5977 13.9736 15.9587 13.6134C16.3196 13.2531 16.5 12.8182 16.5 12.3087C16.5 11.799 16.3198 11.3637 15.9595 11.0027C15.5993 10.6419 15.1644 10.4614 14.6547 10.4614C14.1451 10.4614 13.7098 10.6416 13.349 11.0019C12.9882 11.3621 12.8077 11.797 12.8077 12.3067C12.8077 12.8164 12.9878 13.2516 13.348 13.6124C13.7083 13.9733 14.1433 14.1537 14.6528 14.1537ZM1.5 13.0577V11.5577H9.1155V13.0577H1.5ZM3.34625 7.03844C2.40925 7.03844 1.61733 6.71494 0.9705 6.06794C0.3235 5.42111 0 4.62919 0 3.69219C0 2.75536 0.3235 1.96344 0.9705 1.31644C1.61733 0.669608 2.40925 0.346191 3.34625 0.346191C4.28308 0.346191 5.075 0.669608 5.722 1.31644C6.36883 1.96344 6.69225 2.75536 6.69225 3.69219C6.69225 4.62919 6.36883 5.42111 5.722 6.06794C5.075 6.71494 4.28308 7.03844 3.34625 7.03844ZM3.34525 5.53844C3.85492 5.53844 4.29017 5.35827 4.651 4.99794C5.01183 4.63777 5.19225 4.20286 5.19225 3.69319C5.19225 3.18352 5.01217 2.74828 4.652 2.38744C4.29167 2.02661 3.85675 1.84619 3.34725 1.84619C2.83758 1.84619 2.40225 2.02628 2.04125 2.38644C1.68042 2.74678 1.5 3.18169 1.5 3.69119C1.5 4.20086 1.68017 4.63619 2.0405 4.99719C2.40067 5.35803 2.83558 5.53844 3.34525 5.53844ZM8.8845 4.44219V2.94219H16.5V4.44219H8.8845Z"
          fill="currentColor"
        />
      </svg>
    );
  },
};
