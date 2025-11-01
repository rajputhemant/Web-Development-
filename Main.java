import java.util.*;
public class Main 
{
	static int n,m;
	static char[][]gird;
	static boolean [][] visited;
	static int[]dx= {-1,1,0,0};
	static int[]dy= {0,0,-1,1};
	
	public static void main(String[] args) 
	{
		Scanner sc= new Scanner(System.in);
		n=sc.nextInt();
		m=sc.nextInt();
		gird=new char[n][m];
		for (int i = 0; i < n; i++)
		{
			String line =sc.next();
			for(int j=0;j<m;j++) {
				gird[i][j]=line.charAt(j);
			}
		}
		sc.close();
		System.out.println(minimumSwitches());
	}
	static int minimumSwitches() 
	{
		visited=new boolean[n][m];
		int switches=0;
	   
		for (int i = 0; i <n; i++) 
		{
		  for (int j = 0; j <m; j++) 
		  {
			if (!visited[i][j]&&gird[i][j]=='C')
			{
				switches+=analyzeCableRegion(i,j);
			}
		 }	
		}
		  return switches;
		}
		static int analyzeCableRegion(int x,int y) 
		{
			Queue<int[]> q = new LinkedList<>();
			q.offer(new int[] {x,y});
			visited[x][y]=true;
			
			int localSwitches=0;
			while(!q.isEmpty()) 
			{
				int[]curr=q.poll();
				int cx=curr[0],cy=curr[1];
				
				for(int dir=0;dir<4;dir++) 
				{
					int nx=cx+dx[dir];
					int ny=cy+dy[dir];
					if (nx>=0&&nx<n&&ny>=0&&ny<m) 
					{
						if (gird[nx][ny]=='C'&&!visited[nx][ny])
						{
							visited[nx][ny]=true;
							q.offer(new int[] {nx,ny});
						}
						if (gird[nx][ny]=='R')
						{
						 localSwitches=1;	
						}
					}
				}
		    }
			return localSwitches;
	}
 
}
