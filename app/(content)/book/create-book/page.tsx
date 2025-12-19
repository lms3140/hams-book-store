"use client";

import { RequestBookInfo } from "@/app/_types/book";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  getAuthor,
  getCategory,
  getPublisher,
  getSubCategory,
} from "./_api/getSelectOpt";
import Select from "./_components/Select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import { postClientFetch } from "@/app/_lib/api/client/fetch";
import { BookInput } from "./_components/BookInput";
import { SERVER_URL } from "@/app/_lib/api/common/config";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { BookForm } from "../_components/BookForm";

export default function Page() {
  return (
    <div>
      <BookForm />
    </div>
  );
}
