import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import 'rxjs';

@Component({
  selector: 'app-team-member-update',
  templateUrl: './team-member-update.component.html',
  styleUrls: ['./team-member-update.component.css']
})
export class TeamMemberUpdateComponent implements OnInit {

  employeeObj:object={};
  id:number;
  employee=[];
  data:object={};
   private headers=new Headers({'Content-Type':'application/json'});

  constructor(private router:Router, private route: ActivatedRoute, private http:Http) { }
  teamMemberUpdate(member){
    this.employeeObj={
      "name": member.Name,
      "birthdate": member.BirthDate,
      "comment": member.Comments
    };
    const url = `${"http://localhost:61161/api/TeamMember"}/${this.id}`;
    this.http.put(url, JSON.stringify(this.employeeObj), {headers:this.headers})
    .toPromise()
    .then(() =>{
      this.router.navigate(['/']);
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = +params['id'];
    });
    this.http.get("http://localhost:61161/api/TeamMember", this.employeeObj).subscribe(
      (res:Response) => {
       this.employee=res.json();
       for(var i=0; i<this.employee.length;i++){
         if(parseInt(this.employee[i].id)===this.id){
           this.data=this.employee[i];
           break;
         }
       }      
      }
    )
  }

}
