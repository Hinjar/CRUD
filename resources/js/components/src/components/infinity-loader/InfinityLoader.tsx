import React from "react";
import {FixedSizeList} from "react-window";
import {AutoSizer, Size} from 'react-virtualized';
import './InfinityLoader.css'
import {InfinityLoaderPropsDto} from "../../ts/types/infinity-loader-props.type";

const InfinityLoader: React.FC<InfinityLoaderPropsDto> = ({itemsCount, itemSize, children}) => {

    return (
        <AutoSizer className={'List'}>
            {({height, width}: Size) => (
                <FixedSizeList
                    height={height}
                    itemCount={itemsCount}
                    itemSize={itemSize}
                    width={width}
                >
                    {children}
                </FixedSizeList>
                )
            }
        </AutoSizer>
    )
}

export default InfinityLoader
