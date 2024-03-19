import WindVane from "../../components/windvane";
import {useState} from "react";

const WindVanePage = () => {

    const [count, setCount] = useState<number>(0)

    return <div>
        <div>
            <div>
                <button className={'bg-violet-600 text-white rounded-md px-5 py-2 mt-3'} onClick={() =>
                    count > 19
                        ? window.confirm('이제 그만~')
                        : setCount(prevState => prevState + 1)}
                >
                    {count}+
                </button>
                <WindVane count={count}/>
            </div>
        </div>
    </div>
}

export default WindVanePage