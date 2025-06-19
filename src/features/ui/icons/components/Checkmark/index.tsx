import { FC, SVGProps } from 'react'

const Checkmark: FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-white size-[24px]"
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <path
                d="M5 13L10 18L19 7"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
            />
        </svg>
    )
}

export default Checkmark
