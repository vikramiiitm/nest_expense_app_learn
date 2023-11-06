import {IsNumber, IsPositive, isString, IsNotEmpty, IsString} from "class-validator"

export class CreateReportDTO {

    @IsNumber()
    @IsPositive()
    amount: number;
    
    @IsNotEmpty()
    @IsString()
    source: string;
}