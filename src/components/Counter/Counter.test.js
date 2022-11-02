import { fireEvent, render } from "@testing-library/react"
import Counter from "./Counter";

describe(Counter, () => {
    it("Counter Displays Correct Initial Count", () => {
        const { getByTestId } = render(<Counter initialCount={0} />);
        const countValue = Number(getByTestId("count").textContent);

        expect(countValue).toEqual(0 )
    })


    it("Count Should Increment by 1 if the Increment Button is Clicked ", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
        const incrementBtn = getByRole("button", { name: "Increment" })


        const countValue1 = Number(getByTestId("count").textContent);

        expect(countValue1).toEqual(0)
        fireEvent.click(incrementBtn);;

        const countValue2 = Number(getByTestId("count").textContent)
        expect(countValue2).toEqual(1)
    });



    it("Count Should Decrement by 1 if the Decrement Button is Clicked ", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
        const decrementBtn = getByRole("button", { name: "Decrement" })

        expect(Number(getByTestId("count").textContent)).toEqual(0)
        fireEvent.click(decrementBtn);;

        expect(Number(getByTestId("count").textContent)).toEqual(-1)
    });




    it("Count Should be 0 if the Restart Button is Clicked ", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={30} />);
        const resetBtn = getByRole("button", { name: "Reset" })

        expect(Number(getByTestId("count").textContent)).toEqual(30)
        fireEvent.click(resetBtn);;

        expect(Number(getByTestId("count").textContent)).toEqual(0)
    });





    it("Count Should be Invert Signs if the Switch Signs Button is Clicked ", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={30} />);
        const switchBtn = getByRole("button", { name: "Switch Signs" })

        expect(Number(getByTestId("count").textContent)).toEqual(30)
        fireEvent.click(switchBtn);;

        expect(Number(getByTestId("count").textContent)).toEqual(-30)
    });



})