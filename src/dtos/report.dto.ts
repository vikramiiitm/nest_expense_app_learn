import {IsNumber, IsPositive, isString, IsNotEmpty, IsString, IsOptional, isPositive} from "class-validator"

export class CreateReportDTO {

    @IsNumber()
    @IsPositive()
    amount: number;
    
    @IsNotEmpty()
    @IsString()
    source: string;
}

export class UpdateReportDTO {
    
    @IsNumber()
    @IsPositive()
    @IsOptional()
    amount: number
    
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    source: string
}