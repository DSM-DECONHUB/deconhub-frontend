import {getContestList} from "../../utils/apis";

function Contest(){
    const contestList = getContestList();

    return(
        <>
            {
                contestList.map((value,index)=>{
                    return (
                        <>
                            <p>{value.title}</p>
                            <div>
                                {value.content}
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default Contest;